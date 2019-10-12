import content_initialState from "./content_initialState";
import {matchRoutes} from "react-router-config";
import configStore from "../client/redux/store";
import Routes from "../client/Routes";

const fs = require('fs');
const path = require('path');

export const RenderContent = async (req, res) => {
  const store = configStore();

  const actions = matchRoutes(Routes, req.path)
    .map(({route}) => route.component.fetching ? route.component.fetching(store.dispatch, req.url) : null)
    .map(async (actions) => await Promise.all(
      (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
    ));

  await Promise.all(actions);
  const context = {};
  const content = content_initialState(req, store, context);

  res.send(content);
};

export const getItems = (req, res) => {
  let rawdata = fs.readFileSync(path.join(__dirname, "./json/all.json"));
  let items = JSON.parse(rawdata);
  res.send(items);
};

export const getItemWithId = (req, res) => {
  const idx = req.params.id;
  console.log("Item id fetched", idx);
  let rawdata = fs.readFileSync(path.join(__dirname, "./json/all.json"));
  let items = JSON.parse(rawdata);
  const itemWithId = items.data[idx - 1];
  res.send(itemWithId);
};