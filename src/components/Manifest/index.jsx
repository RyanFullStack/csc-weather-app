import { useContext, useState } from "react";
import { LoadContext } from "../../context/LoadContext";
import { WeatherContext } from "../../context/WeatherContext";
import "./manifest.css";

const multiData = [
  {
      "aircraft_id": "161",
      "aircraft_name": "",
      "caculate_expected_take_off": 1715022063,
      "dzso": "",
      "dzso_id": 0,
      "expected_take_off": 1715022063,
      "gca": "",
      "gca_id": 0,
      "groups": [
          [
              {
                  "formation_type_id": "0",
                  "formation_type_name": "",
                  "group_number": "",
                  "handycam_jump": "",
                  "id": "6294801",
                  "is_private": "0",
                  "is_public": "1",
                  "jump": "Recurrency",
                  "name": "Tyler Romine",
                  "option_name": "",
                  "rig_id": "0",
                  "rig_name": "",
                  "sale_id": "1027461",
                  "team_id": "0",
                  "team_name": "",
                  "transaction_type_id": "1",
                  "tribe": "",
                  "type": "Sport Jumper"
              },
              {
                  "formation_type_id": "0",
                  "formation_type_name": "",
                  "group_number": "",
                  "handycam_jump": "",
                  "id": "6294811",
                  "is_private": "0",
                  "is_public": "1",
                  "jump": "Coach Lic. Rec.",
                  "name": "Lauren Pfeifer",
                  "option_name": "",
                  "rig_id": "0",
                  "rig_name": "",
                  "sale_id": "1027461",
                  "team_id": "0",
                  "team_name": "",
                  "transaction_type_id": "3",
                  "tribe": "",
                  "type": "Sport Jumper"
              }
          ],
          [
              {
                  "formation_type_id": "0",
                  "formation_type_name": "",
                  "group_number": "Booooobs-1-1",
                  "handycam_jump": "",
                  "id": "6295041",
                  "is_private": "0",
                  "is_public": "1",
                  "jump": ".",
                  "name": "Stephanie Behnke",
                  "option_name": "",
                  "rig_id": "0",
                  "rig_name": "",
                  "sale_id": "1027551",
                  "team_id": "77551",
                  "team_name": "Booooobs-1",
                  "transaction_type_id": "1",
                  "tribe": "",
                  "type": "Sport Jumper"
              }
          ],
          [
              {
                  "formation_type_id": "0",
                  "formation_type_name": "",
                  "group_number": "Booooobs-1-2",
                  "handycam_jump": "",
                  "id": "6295051",
                  "is_private": "0",
                  "is_public": "1",
                  "jump": ".",
                  "name": "Ryno",
                  "option_name": "",
                  "rig_id": "0",
                  "rig_name": "",
                  "sale_id": "1027561",
                  "team_id": "77551",
                  "team_name": "Booooobs-1",
                  "transaction_type_id": "1",
                  "tribe": "",
                  "type": "Sport Jumper"
              }
          ],
          [
              {
                  "formation_type_id": "0",
                  "formation_type_name": "",
                  "group_number": "",
                  "handycam_jump": "",
                  "id": "6294791",
                  "is_private": "0",
                  "is_public": "1",
                  "jump": ".",
                  "name": "William Helvey",
                  "option_name": "",
                  "rig_id": "0",
                  "rig_name": "",
                  "sale_id": "1027451",
                  "team_id": "0",
                  "team_name": "",
                  "transaction_type_id": "1",
                  "tribe": "",
                  "type": "Sport Jumper"
              }
          ],
          [
              {
                  "formation_type_id": "0",
                  "formation_type_name": "",
                  "group_number": "",
                  "handycam_jump": "",
                  "id": "6295071",
                  "is_private": "0",
                  "is_public": "1",
                  "jump": "5,000'",
                  "name": "Ryno",
                  "option_name": "",
                  "rig_id": "0",
                  "rig_name": "",
                  "sale_id": "1027571",
                  "team_id": "0",
                  "team_name": "",
                  "transaction_type_id": "12",
                  "tribe": "",
                  "type": "Student"
              }
          ],
          [
              {
                  "formation_type_id": "0",
                  "formation_type_name": "",
                  "group_number": "",
                  "handycam_jump": "",
                  "id": "6295071",
                  "is_private": "0",
                  "is_public": "1",
                  "jump": "FU 1",
                  "name": "Ryno",
                  "option_name": "",
                  "rig_id": "0",
                  "rig_name": "",
                  "sale_id": "1027571",
                  "team_id": "0",
                  "team_name": "",
                  "transaction_type_id": "12",
                  "tribe": "",
                  "type": "Student"
              },
              {
                  "formation_type_id": "0",
                  "formation_type_name": "",
                  "group_number": "",
                  "handycam_jump": "",
                  "id": "6295081",
                  "is_private": "0",
                  "is_public": "1",
                  "jump": "AFFI",
                  "name": "Stephanie Behnke",
                  "option_name": "",
                  "rig_id": "0",
                  "rig_name": "",
                  "sale_id": "1027571",
                  "team_id": "0",
                  "team_name": "",
                  "transaction_type_id": "3",
                  "tribe": "",
                  "type": "Student"
              }
          ],
          [
              {
                  "formation_type_id": "0",
                  "formation_type_name": "",
                  "group_number": "1-1",
                  "handycam_jump": "",
                  "id": "6295091",
                  "is_private": "0",
                  "is_public": "1",
                  "jump": "14,000' Tandem ",
                  "name": "Bart Pillen",
                  "option_name": "",
                  "rig_id": "0",
                  "rig_name": "",
                  "sale_id": "1027581",
                  "team_id": "0",
                  "team_name": "",
                  "transaction_type_id": "11",
                  "tribe": "",
                  "type": "Tandem"
              },
              {
                  "formation_type_id": "0",
                  "formation_type_name": "",
                  "group_number": "1-1",
                  "handycam_jump": "",
                  "id": "6295101",
                  "is_private": "0",
                  "is_public": "1",
                  "jump": "TI WC 14",
                  "name": "Zach Foreman",
                  "option_name": "",
                  "rig_id": "0",
                  "rig_name": "",
                  "sale_id": "1027581",
                  "team_id": "0",
                  "team_name": "",
                  "transaction_type_id": "3",
                  "tribe": "",
                  "type": "Tandem"
              }
          ],
          [
              {
                  "formation_type_id": "0",
                  "formation_type_name": "",
                  "group_number": "1-1",
                  "handycam_jump": "",
                  "id": "6295091",
                  "is_private": "0",
                  "is_public": "1",
                  "jump": "14,000' Tandem ",
                  "name": "Bart Pillen",
                  "option_name": "",
                  "rig_id": "0",
                  "rig_name": "",
                  "sale_id": "1027581",
                  "team_id": "0",
                  "team_name": "",
                  "transaction_type_id": "11",
                  "tribe": "",
                  "type": "Tandem"
              },
              {
                  "formation_type_id": "0",
                  "formation_type_name": "",
                  "group_number": "1-1",
                  "handycam_jump": "",
                  "id": "6295101",
                  "is_private": "0",
                  "is_public": "1",
                  "jump": "TI WC 14",
                  "name": "Zach Foreman",
                  "option_name": "",
                  "rig_id": "0",
                  "rig_name": "",
                  "sale_id": "1027581",
                  "team_id": "0",
                  "team_name": "",
                  "transaction_type_id": "3",
                  "tribe": "",
                  "type": "Tandem"
              }
          ],
          [
              {
                  "formation_type_id": "0",
                  "formation_type_name": "",
                  "group_number": "1-1",
                  "handycam_jump": "",
                  "id": "6295091",
                  "is_private": "0",
                  "is_public": "1",
                  "jump": "14,000' Tandem ",
                  "name": "Bart Pillen",
                  "option_name": "",
                  "rig_id": "0",
                  "rig_name": "",
                  "sale_id": "1027581",
                  "team_id": "0",
                  "team_name": "",
                  "transaction_type_id": "11",
                  "tribe": "",
                  "type": "Tandem"
              },
              {
                  "formation_type_id": "0",
                  "formation_type_name": "",
                  "group_number": "1-1",
                  "handycam_jump": "",
                  "id": "6295101",
                  "is_private": "0",
                  "is_public": "1",
                  "jump": "TI WC 14",
                  "name": "Zach Foreman",
                  "option_name": "",
                  "rig_id": "0",
                  "rig_name": "",
                  "sale_id": "1027581",
                  "team_id": "0",
                  "team_name": "",
                  "transaction_type_id": "3",
                  "tribe": "",
                  "type": "Tandem"
              }
          ]
      ],
      "id": "225011",
      "is_fueling": "0",
      "is_no_time": "0",
      "is_turning": "1",
      "landing_zone_id": 0,
      "lm": "",
      "lm_id": 0,
      "loading_gate_id": 0,
      "max_slots": "14",
      "name": "Whale 1",
      "private_slots": "0",
      "public_slots": "4",
      "reserve_slots": 0,
      "slots": {
          "private_slots": "0",
          "public_slots": "4"
      },
      "status": "On Call",
      "stop_at": "1197",
      "time_left": 5,
      "total_slots": 4
  },
  {
      "aircraft_id": "161",
      "aircraft_name": "",
      "caculate_expected_take_off": 1715023563,
      "dzso": "",
      "dzso_id": 0,
      "expected_take_off": 1715023563,
      "gca": "",
      "gca_id": 0,
      "groups": [[
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6294801",
              "is_private": "0",
              "is_public": "1",
              "jump": "Recurrency",
              "name": "Tyler Romine",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027461",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6294811",
              "is_private": "0",
              "is_public": "1",
              "jump": "Coach Lic. Rec.",
              "name": "Lauren Pfeifer",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027461",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "Booooobs-1-1",
              "handycam_jump": "",
              "id": "6295041",
              "is_private": "0",
              "is_public": "1",
              "jump": ".",
              "name": "Stephanie Behnke",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027551",
              "team_id": "77551",
              "team_name": "Booooobs-1",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "Booooobs-1-2",
              "handycam_jump": "",
              "id": "6295051",
              "is_private": "0",
              "is_public": "1",
              "jump": ".",
              "name": "Ryno",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027561",
              "team_id": "77551",
              "team_name": "Booooobs-1",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6294791",
              "is_private": "0",
              "is_public": "1",
              "jump": ".",
              "name": "William Helvey",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027451",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6295071",
              "is_private": "0",
              "is_public": "1",
              "jump": "5,000'",
              "name": "Ryno",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027571",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "12",
              "tribe": "",
              "type": "Student"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6295071",
              "is_private": "0",
              "is_public": "1",
              "jump": "FU 1",
              "name": "Ryno",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027571",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "12",
              "tribe": "",
              "type": "Student"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6295081",
              "is_private": "0",
              "is_public": "1",
              "jump": "AFFI",
              "name": "Stephanie Behnke",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027571",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Student"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295091",
              "is_private": "0",
              "is_public": "1",
              "jump": "14,000' Tandem ",
              "name": "Bart Pillen",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "11",
              "tribe": "",
              "type": "Tandem"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295101",
              "is_private": "0",
              "is_public": "1",
              "jump": "TI WC 14",
              "name": "Zach Foreman",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Tandem"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295091",
              "is_private": "0",
              "is_public": "1",
              "jump": "14,000' Tandem ",
              "name": "Bart Pillen",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "11",
              "tribe": "",
              "type": "Tandem"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295101",
              "is_private": "0",
              "is_public": "1",
              "jump": "TI WC 14",
              "name": "Zach Foreman",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Tandem"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295091",
              "is_private": "0",
              "is_public": "1",
              "jump": "14,000' Tandem ",
              "name": "Bart Pillen",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "11",
              "tribe": "",
              "type": "Tandem"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295101",
              "is_private": "0",
              "is_public": "1",
              "jump": "TI WC 14",
              "name": "Zach Foreman",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Tandem"
          }
      ]],
      "id": "225021",
      "is_fueling": "0",
      "is_no_time": "1",
      "is_turning": "1",
      "landing_zone_id": 0,
      "lm": "",
      "lm_id": 0,
      "loading_gate_id": 0,
      "max_slots": "14",
      "name": "Whale 2",
      "private_slots": "0",
      "public_slots": "0",
      "reserve_slots": 0,
      "slots": {
          "private_slots": "0",
          "public_slots": "0"
      },
      "status": "On Call",
      "stop_at": "2697",
      "time_left": 25,
      "total_slots": 0
  },
  {
      "aircraft_id": "161",
      "aircraft_name": "",
      "caculate_expected_take_off": 1715025063,
      "dzso": "",
      "dzso_id": 0,
      "expected_take_off": 1715025063,
      "gca": "",
      "gca_id": 0,
      "groups": [[
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6294801",
              "is_private": "0",
              "is_public": "1",
              "jump": "Recurrency",
              "name": "Tyler Romine",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027461",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6294811",
              "is_private": "0",
              "is_public": "1",
              "jump": "Coach Lic. Rec.",
              "name": "Lauren Pfeifer",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027461",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "Booooobs-1-1",
              "handycam_jump": "",
              "id": "6295041",
              "is_private": "0",
              "is_public": "1",
              "jump": ".",
              "name": "Stephanie Behnke",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027551",
              "team_id": "77551",
              "team_name": "Booooobs-1",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "Booooobs-1-2",
              "handycam_jump": "",
              "id": "6295051",
              "is_private": "0",
              "is_public": "1",
              "jump": ".",
              "name": "Ryno",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027561",
              "team_id": "77551",
              "team_name": "Booooobs-1",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6294791",
              "is_private": "0",
              "is_public": "1",
              "jump": ".",
              "name": "William Helvey",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027451",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6295071",
              "is_private": "0",
              "is_public": "1",
              "jump": "5,000'",
              "name": "Ryno",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027571",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "12",
              "tribe": "",
              "type": "Student"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6295071",
              "is_private": "0",
              "is_public": "1",
              "jump": "FU 1",
              "name": "Ryno",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027571",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "12",
              "tribe": "",
              "type": "Student"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6295081",
              "is_private": "0",
              "is_public": "1",
              "jump": "AFFI",
              "name": "Stephanie Behnke",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027571",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Student"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295091",
              "is_private": "0",
              "is_public": "1",
              "jump": "14,000' Tandem ",
              "name": "Bart Pillen",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "11",
              "tribe": "",
              "type": "Tandem"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295101",
              "is_private": "0",
              "is_public": "1",
              "jump": "TI WC 14",
              "name": "Zach Foreman",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Tandem"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295091",
              "is_private": "0",
              "is_public": "1",
              "jump": "14,000' Tandem ",
              "name": "Bart Pillen",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "11",
              "tribe": "",
              "type": "Tandem"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295101",
              "is_private": "0",
              "is_public": "1",
              "jump": "TI WC 14",
              "name": "Zach Foreman",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Tandem"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295091",
              "is_private": "0",
              "is_public": "1",
              "jump": "14,000' Tandem ",
              "name": "Bart Pillen",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "11",
              "tribe": "",
              "type": "Tandem"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295101",
              "is_private": "0",
              "is_public": "1",
              "jump": "TI WC 14",
              "name": "Zach Foreman",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Tandem"
          }
      ]],
      "id": "225031",
      "is_fueling": "0",
      "is_no_time": "1",
      "is_turning": "1",
      "landing_zone_id": 0,
      "lm": "",
      "lm_id": 0,
      "loading_gate_id": 0,
      "max_slots": "14",
      "name": "Whale 3",
      "private_slots": "0",
      "public_slots": "0",
      "reserve_slots": 0,
      "slots": {
          "private_slots": "0",
          "public_slots": "0"
      },
      "status": "Building",
      "stop_at": "4197",
      "time_left": 70,
      "total_slots": 0
  },
  {
      "aircraft_id": "161",
      "aircraft_name": "",
      "caculate_expected_take_off": 1715026563,
      "dzso": "",
      "dzso_id": 0,
      "expected_take_off": 1715026563,
      "gca": "",
      "gca_id": 0,
      "groups": [[
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6294801",
              "is_private": "0",
              "is_public": "1",
              "jump": "Recurrency",
              "name": "Tyler Romine",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027461",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6294811",
              "is_private": "0",
              "is_public": "1",
              "jump": "Coach Lic. Rec.",
              "name": "Lauren Pfeifer",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027461",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "Booooobs-1-1",
              "handycam_jump": "",
              "id": "6295041",
              "is_private": "0",
              "is_public": "1",
              "jump": ".",
              "name": "Stephanie Behnke",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027551",
              "team_id": "77551",
              "team_name": "Booooobs-1",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "Booooobs-1-2",
              "handycam_jump": "",
              "id": "6295051",
              "is_private": "0",
              "is_public": "1",
              "jump": ".",
              "name": "Ryno",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027561",
              "team_id": "77551",
              "team_name": "Booooobs-1",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6294791",
              "is_private": "0",
              "is_public": "1",
              "jump": ".",
              "name": "William Helvey",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027451",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6295071",
              "is_private": "0",
              "is_public": "1",
              "jump": "5,000'",
              "name": "Ryno",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027571",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "12",
              "tribe": "",
              "type": "Student"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6295071",
              "is_private": "0",
              "is_public": "1",
              "jump": "FU 1",
              "name": "Ryno",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027571",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "12",
              "tribe": "",
              "type": "Student"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6295081",
              "is_private": "0",
              "is_public": "1",
              "jump": "AFFI",
              "name": "Stephanie Behnke",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027571",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Student"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295091",
              "is_private": "0",
              "is_public": "1",
              "jump": "14,000' Tandem ",
              "name": "Bart Pillen",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "11",
              "tribe": "",
              "type": "Tandem"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295101",
              "is_private": "0",
              "is_public": "1",
              "jump": "TI WC 14",
              "name": "Zach Foreman",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Tandem"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295091",
              "is_private": "0",
              "is_public": "1",
              "jump": "14,000' Tandem ",
              "name": "Bart Pillen",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "11",
              "tribe": "",
              "type": "Tandem"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295101",
              "is_private": "0",
              "is_public": "1",
              "jump": "TI WC 14",
              "name": "Zach Foreman",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Tandem"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295091",
              "is_private": "0",
              "is_public": "1",
              "jump": "14,000' Tandem ",
              "name": "Bart Pillen",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "11",
              "tribe": "",
              "type": "Tandem"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295101",
              "is_private": "0",
              "is_public": "1",
              "jump": "TI WC 14",
              "name": "Zach Foreman",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Tandem"
          }
      ]],
      "id": "225041",
      "is_fueling": "0",
      "is_no_time": "1",
      "is_turning": "1",
      "landing_zone_id": 0,
      "lm": "",
      "lm_id": 0,
      "loading_gate_id": 0,
      "max_slots": "14",
      "name": "Whale 4",
      "private_slots": "0",
      "public_slots": "0",
      "reserve_slots": 0,
      "slots": {
          "private_slots": "0",
          "public_slots": "0"
      },
      "status": "Building",
      "stop_at": "5697",
      "time_left": 95,
      "total_slots": 0
  },
  {
      "aircraft_id": "161",
      "aircraft_name": "",
      "caculate_expected_take_off": 1715028063,
      "dzso": "",
      "dzso_id": 0,
      "expected_take_off": 1715028063,
      "gca": "",
      "gca_id": 0,
      "groups": [[
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6294801",
              "is_private": "0",
              "is_public": "1",
              "jump": "Recurrency",
              "name": "Tyler Romine",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027461",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6294811",
              "is_private": "0",
              "is_public": "1",
              "jump": "Coach Lic. Rec.",
              "name": "Lauren Pfeifer",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027461",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "Booooobs-1-1",
              "handycam_jump": "",
              "id": "6295041",
              "is_private": "0",
              "is_public": "1",
              "jump": ".",
              "name": "Stephanie Behnke",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027551",
              "team_id": "77551",
              "team_name": "Booooobs-1",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "Booooobs-1-2",
              "handycam_jump": "",
              "id": "6295051",
              "is_private": "0",
              "is_public": "1",
              "jump": ".",
              "name": "Ryno",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027561",
              "team_id": "77551",
              "team_name": "Booooobs-1",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6294791",
              "is_private": "0",
              "is_public": "1",
              "jump": ".",
              "name": "William Helvey",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027451",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6295071",
              "is_private": "0",
              "is_public": "1",
              "jump": "5,000'",
              "name": "Ryno",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027571",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "12",
              "tribe": "",
              "type": "Student"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6295071",
              "is_private": "0",
              "is_public": "1",
              "jump": "FU 1",
              "name": "Ryno",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027571",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "12",
              "tribe": "",
              "type": "Student"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6295081",
              "is_private": "0",
              "is_public": "1",
              "jump": "AFFI",
              "name": "Stephanie Behnke",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027571",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Student"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295091",
              "is_private": "0",
              "is_public": "1",
              "jump": "14,000' Tandem ",
              "name": "Bart Pillen",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "11",
              "tribe": "",
              "type": "Tandem"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295101",
              "is_private": "0",
              "is_public": "1",
              "jump": "TI WC 14",
              "name": "Zach Foreman",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Tandem"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295091",
              "is_private": "0",
              "is_public": "1",
              "jump": "14,000' Tandem ",
              "name": "Bart Pillen",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "11",
              "tribe": "",
              "type": "Tandem"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295101",
              "is_private": "0",
              "is_public": "1",
              "jump": "TI WC 14",
              "name": "Zach Foreman",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Tandem"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295091",
              "is_private": "0",
              "is_public": "1",
              "jump": "14,000' Tandem ",
              "name": "Bart Pillen",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "11",
              "tribe": "",
              "type": "Tandem"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295101",
              "is_private": "0",
              "is_public": "1",
              "jump": "TI WC 14",
              "name": "Zach Foreman",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Tandem"
          }
      ]],
      "id": "225051",
      "is_fueling": "0",
      "is_no_time": "1",
      "is_turning": "1",
      "landing_zone_id": 0,
      "lm": "",
      "lm_id": 0,
      "loading_gate_id": 0,
      "max_slots": "14",
      "name": "Whale 5",
      "private_slots": "0",
      "public_slots": "0",
      "reserve_slots": 0,
      "slots": {
          "private_slots": "0",
          "public_slots": "0"
      },
      "status": "Building",
      "stop_at": "7197",
      "time_left": 120,
      "total_slots": 0
  },
  {
      "aircraft_id": "161",
      "aircraft_name": "",
      "caculate_expected_take_off": 1715028063,
      "dzso": "",
      "dzso_id": 0,
      "expected_take_off": 1715028063,
      "gca": "",
      "gca_id": 0,
      "groups": [[
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6294801",
              "is_private": "0",
              "is_public": "1",
              "jump": "Recurrency",
              "name": "Tyler Romine",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027461",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6294811",
              "is_private": "0",
              "is_public": "1",
              "jump": "Coach Lic. Rec.",
              "name": "Lauren Pfeifer",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027461",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "Booooobs-1-1",
              "handycam_jump": "",
              "id": "6295041",
              "is_private": "0",
              "is_public": "1",
              "jump": ".",
              "name": "Stephanie Behnke",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027551",
              "team_id": "77551",
              "team_name": "Booooobs-1",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "Booooobs-1-2",
              "handycam_jump": "",
              "id": "6295051",
              "is_private": "0",
              "is_public": "1",
              "jump": ".",
              "name": "Ryno",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027561",
              "team_id": "77551",
              "team_name": "Booooobs-1",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6294791",
              "is_private": "0",
              "is_public": "1",
              "jump": ".",
              "name": "William Helvey",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027451",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "1",
              "tribe": "",
              "type": "Sport Jumper"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6295071",
              "is_private": "0",
              "is_public": "1",
              "jump": "5,000'",
              "name": "Ryno",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027571",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "12",
              "tribe": "",
              "type": "Student"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6295071",
              "is_private": "0",
              "is_public": "1",
              "jump": "FU 1",
              "name": "Ryno",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027571",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "12",
              "tribe": "",
              "type": "Student"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "",
              "handycam_jump": "",
              "id": "6295081",
              "is_private": "0",
              "is_public": "1",
              "jump": "AFFI",
              "name": "Stephanie Behnke",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027571",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Student"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295091",
              "is_private": "0",
              "is_public": "1",
              "jump": "14,000' Tandem ",
              "name": "Bart Pillen",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "11",
              "tribe": "",
              "type": "Tandem"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295101",
              "is_private": "0",
              "is_public": "1",
              "jump": "TI WC 14",
              "name": "Zach Foreman",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Tandem"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295091",
              "is_private": "0",
              "is_public": "1",
              "jump": "14,000' Tandem ",
              "name": "Bart Pillen",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "11",
              "tribe": "",
              "type": "Tandem"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295101",
              "is_private": "0",
              "is_public": "1",
              "jump": "TI WC 14",
              "name": "Zach Foreman",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Tandem"
          }
      ],
      [
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295091",
              "is_private": "0",
              "is_public": "1",
              "jump": "14,000' Tandem ",
              "name": "Bart Pillen",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "11",
              "tribe": "",
              "type": "Tandem"
          },
          {
              "formation_type_id": "0",
              "formation_type_name": "",
              "group_number": "1-1",
              "handycam_jump": "",
              "id": "6295101",
              "is_private": "0",
              "is_public": "1",
              "jump": "TI WC 14",
              "name": "Zach Foreman",
              "option_name": "",
              "rig_id": "0",
              "rig_name": "",
              "sale_id": "1027581",
              "team_id": "0",
              "team_name": "",
              "transaction_type_id": "3",
              "tribe": "",
              "type": "Tandem"
          }
      ]],
      "id": "225051",
      "is_fueling": "0",
      "is_no_time": "1",
      "is_turning": "1",
      "landing_zone_id": 0,
      "lm": "",
      "lm_id": 0,
      "loading_gate_id": 0,
      "max_slots": "14",
      "name": "Whale 6",
      "private_slots": "0",
      "public_slots": "0",
      "reserve_slots": 0,
      "slots": {
          "private_slots": "0",
          "public_slots": "0"
      },
      "status": "Building",
      "stop_at": "7197",
      "time_left": 120,
      "total_slots": 0
  }
]

function Manifest() {
  let { loads } = useContext(LoadContext);
  const { darkTheme } = useContext(WeatherContext);

  const [searchValue, setSearchValue] = useState("");

  if (loads.error) {
    return <div>Can't connect to burble :(</div>;
  }

  loads = multiData;

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
  };

  return (
    <>
      {!loads.every((load) => !load.name) ? (
        <div className="jumper-search">
          <input
            onChange={handleSearch}
            value={searchValue}
            id="jumper-search-input"
            placeholder="Search for a name..."
          ></input>
          <button id="clear-search" onClick={handleClear}>
            CLEAR
          </button>
        </div>
      ) : null}

      <div className="manifest-content">
        {loads.every((load) => !load.name) ? (
          <div
            className={
              darkTheme === "true" ? "single-load" : "single-load loadlight"
            }
          >
            No Loads
          </div>
        ) : (
          loads.map((load, index) => {
            if (load.name) {
              const pattern = /([a-zA-Z\s]+)(\d+)/;
              const match = load.name.match(pattern);
              let text, number;
              if (match) {
                text = match[1].trim();
                number = parseInt(match[2]);
              } else {
                text = load.name;
                number = null;
              }

              const slotsRemaining =
                load.max_slots - load.public_slots - load.reserve_slots;
              return (
                <div
                  className={
                    darkTheme === "true"
                      ? "single-load"
                      : "single-load loadlight"
                  }
                  key={index}
                >
                  <div className="single-load-header">
                    <div className="load-header-item first">
                      <span id="slot-count">
                        {slotsRemaining}
                        <span id="small">
                          {slotsRemaining === 1 || slotsRemaining === -1
                            ? "Slot"
                            : "Slots"}
                        </span>
                      </span>
                    </div>
                    <div className="load-header-item">
                      {number ? (
                        <>
                          {number} <span id="small">{text}</span>
                        </>
                      ) : (
                        text
                      )}
                    </div>
                    <div className="load-header-item end">
                      {load.status === "On Call" ? (
                        <span
                          className={
                            load.time_left < 6
                              ? "load-time red"
                              : load.time_left < 11
                              ? "load-time yellow"
                              : "load-time green"
                          }
                        >
                          {load.time_left}{" "}
                          <span id="small">
                            {load.time_left === 1 || load.time_left === -1
                              ? "Min"
                              : "Mins"}
                          </span>
                        </span>
                      ) : (
                        <span id="small">{load.status}</span>
                      )}
                    </div>
                  </div>
                  <div className="single-load-jumpers">
                    {load.groups.map((group, firstIndex) => {
                      return group.map((person, index) => {
                        return person.name
                          .toLowerCase()
                          .includes(searchValue.toLowerCase()) ? (
                          <div
                            className={
                              person.type === "Student" && firstIndex % 2 === 0
                                ? "single-jumper student"
                                : person.type === "Student" &&
                                  firstIndex % 2 !== 0
                                ? "single-jumper student studentodd"
                                : person.type === "Tandem" &&
                                  firstIndex % 2 === 0
                                ? "single-jumper tandem"
                                : person.type === "Tandem" &&
                                  firstIndex % 2 !== 0
                                ? "single-jumper tandem tandemodd"
                                : darkTheme === "true"
                                ? "single-jumper"
                                : "single-jumper jumperlight"
                            }
                            key={index}
                          >
                            <div id="jumper-name">{person.name}</div>
                            <div id="jumper-team">
                              <span id="small">
                                {person.team_name
                                  ? person.team_name
                                  : person.group_number}
                              </span>
                            </div>
                            <div id="jumper-jump">
                              {person.jump} <br />
                              <span id="small">
                                {person.option_name} {person.handycam_jump}
                              </span>
                            </div>
                          </div>
                        ) : null;
                      });
                    })}
                  </div>
                </div>
              );
            }
          })
        )}
      </div>
    </>
  );
}

export default Manifest;
