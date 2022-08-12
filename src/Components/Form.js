import React from 'react';

export default function Form() {
  return (
    <form className="form">
      <fieldset>
        <input type="text" placeholder="Book title" />
        <select value="0">
          <option value="Category 1" label="Category 1" />
          <option value="Category 2" label="Category 2" />
        </select>
        <button type="submit">submit</button>
      </fieldset>

    </form>
  );
}
