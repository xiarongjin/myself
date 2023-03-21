var express = require("express");
var axios = require("axios");
const fetch = require("node-fetch");
const fs = require("fs");
//链接数据库
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "webxrj.top",
  // host:'localhost',//本地
  user: "ppfg",
  password: "ppfg",
  database: "ppfg",
});
connection.end();
var router = express.Router();
function conDb(sql, callback) {
  connection = mysql.createConnection(connection.config);
  connection.connect();
  connection.query(sql, callback);
  connection.end();
}

// teams
// 录入队伍
router.post("/teams/insert", function (req, res) {
  const { name, captain, tag } = req.body;
  const sql = `insert into teams(name,captain,tag) values ('${name}','${captain}','${tag}')`;
  conDb(sql, function (error, data) {
    if (error) {
      console.log(error);
      res.send({
        msg: "插入出错",
        error: error,
      });
      return;
    }
    res.send({ msg: "插入成功" });
  });
});

// 更新队伍数据
router.post("/teams/update", function (req, res) {
  const { id, name, captain, tag } = req.body;
  const sql = `Update teams set name='${name}',captain='${captain}',tag='${tag}' where id=${id}`;
  conDb(sql, function (error, data) {
    if (error) {
      console.log(error);
      res.send({
        msg: "修改出错",
        error: error,
      });
      return;
    }
    res.send({ msg: "修改成功" });
  });
});

// 查询队伍信息
router.get("/teams/search", function (req, res) {
  let sql;
  sql = "select * from teams";
  if (req.query?.id) {
    sql = "select * from teams where id=" + req.query?.id;
  }
  conDb(sql, function (error, data) {
    if (error) {
      console.log(error);
      res.send({
        msg: "查询出错",
        error: error,
      });
      return;
    }
    res.send({ data, msg: "查询成功" });
  });
});

// 录入会员数据
router.post("/members/insert", function (req, res) {
  const { name, backNum, tag } = req.body;
  const sql = `insert into members(name,backNum,tag) values ('${name}','${backNum}','${tag}')`;
  conDb(sql, function (error, data) {
    if (error) {
      console.log(error);
      res.send({
        msg: "插入出错",
        error: error,
      });
      return;
    }
    res.send({ msg: "插入成功" });
  });
});

// 更新会员数据
router.post("/members/update", function (req, res) {
  const { id, name, backNum, tag } = req.body;
  const sql = `Update members set name='${name}',backNum='${backNum}',tag='${tag}' where id=${id}`;
  conDb(sql, function (error, data) {
    if (error) {
      console.log(error);
      res.send({
        msg: "修改出错",
        error: error,
      });
      return;
    }
    res.send({ msg: "修改成功" });
  });
});

// 查询所有会员信息
router.get("/members/search", function (req, res) {
  let sql;
  sql = "select * from members";
  if (req.query?.id) {
    sql = "select * from members where id=" + req.query?.id;
  }
  conDb(sql, function (error, data) {
    if (error) {
      console.log(error);
      res.send({
        msg: "查询出错",
        error: error,
      });
      return;
    }
    res.send({ data, msg: "查询成功" });
  });
});

// 录入比赛数据
router.post("/records/insert", function (req, res) {
  const { team1, catch1, team2, match, point, memberId, niceD, assist, fault } =
    req.body;
  const sql = `insert into records(team1,team2,match,point,memberId,niceD,catch1,assist,fault) values ('${team1}','${team2}','${match}','${point}','${memberId}','${niceD}','${catch1}','${assist}','${fault}')`;
  conDb(sql, function (error, data) {
    if (error) {
      console.log(error);
      res.send({
        msg: "插入出错",
        error: error,
      });
      return;
    }
    res.send({ msg: "插入成功" });
  });
});

// 查询比赛数据
router.get("/records/search", function (req, res) {
  let sql;
  sql = "select * from records";
  let where = "";
  if (Object.keys(req.query).length > 0) {
    Object.keys(req.query).map((key) => {
      console.log(key, req.query[key]);
      where = where + ` ${key}=${req.query[key]}`;
    });
    sql = "select * from records where" + where;
  }
  conDb(sql, function (error, data) {
    if (error) {
      console.log(error);
      res.send({
        msg: "查询出错",
        error: error,
      });
      return;
    }
    res.send({ data, msg: "查询成功" });
  });
});

module.exports = router;
