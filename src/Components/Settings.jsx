import React, { useState } from "react";
import Select from "react-select";
import { categories, difficulty, type, number } from "./SettingsData";

export default function Settings({ settings, handleChange, goHome }) {
  return (
    <div className="select-menu">
      <div className="options-div">
        <h3>Category:</h3>
        <Select
          className="option-class"
          defaultValue={settings.id}
          onChange={handleChange}
          options={categories}
          name="id"
        />
      </div>
      <div className="options-div">
        <h3>Difficulty:</h3>
        <Select
          className="option-class"
          defaultValue={settings.difficulty}
          onChange={handleChange}
          options={difficulty}
          name="difficulty"
        />
      </div>
      <div className="options-div">
        <h3>Type:</h3>
        <Select
          className="option-class"
          defaultValue={settings.type}
          onChange={handleChange}
          options={type}
          name="type"
        />
      </div>
      <div className="options-div">
        <h3>How many:</h3>
        <Select
          className="option-class"
          defaultValue={settings.amount}
          onChange={handleChange}
          options={number}
          name="amount"
        />
      </div>

      <div className="options-div">
        <button
          onClick={goHome}
          className="check-btn btn settings-btn"
          style={{ animation: "none" }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
