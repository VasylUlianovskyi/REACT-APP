import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { CircleLoader } from "react-spinners";
import { loadUsers } from "../../../api";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState(10);
  const [genderFilter, setGenderFilter] = useState("all");

  useEffect(() => {
    const savedPage = Number(window.localStorage.getItem("page"));
    if (savedPage) {
      setCurrentPage(savedPage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("page", currentPage);
  }, [currentPage]);

  useEffect(() => {
    setIsFetching(true);
    setError(null);
    loadUsers({ page: currentPage, results })
      .then(({ results }) => setUsers(results))
      .catch((e) => setError(e))
      .finally(() => setIsFetching(false));
  }, [currentPage, results]);

  const goPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const goNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const handleResultsChange = (e) => {
    setResults(Number(e.target.value));
  };

  const handleGenderFilterChange = (e) => {
    setGenderFilter(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    if (genderFilter === "all") return true;
    return user.gender === genderFilter;
  });

  return (
    <>
      <div className="controls">
        <button onClick={goPrevPage} disabled={currentPage === 1}>
          {"<"}
        </button>
        <span>{currentPage}</span>
        <button onClick={goNextPage}>{">"}</button>
        <select value={results} onChange={handleResultsChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        <select value={genderFilter} onChange={handleGenderFilterChange}>
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <ul>
        {error && <div style={{ color: "red" }}>ERROR</div>}
        {isFetching && (
          <CircleLoader color="lightskyblue" speedMultiplier={2} size={30} />
        )}
        {!error &&
          !isFetching &&
          filteredUsers.map((u) => (
            <li
              key={u.login.uuid}
              className={classNames("user-card", {
                male: u.gender === "male",
                female: u.gender === "female",
              })}
            >
              <img
                src={u.picture.thumbnail}
                alt={`${u.name.first} ${u.name.last}`}
              />
              <img
                src={`https://www.countryflags.io/${u.nat}/shiny/64.png`}
                alt={u.nat}
                className="flag"
              />
              <p>
                {u.name.first} {u.name.last}
              </p>
              <p>{u.gender}</p>
              <p>{u.location.country}</p>
              <p>{u.email}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

UsersList.propTypes = {
  users: PropTypes.array,
  isFetching: PropTypes.bool,
  error: PropTypes.object,
  currentPage: PropTypes.number,
  results: PropTypes.number,
  genderFilter: PropTypes.string,
};

export default UsersList;
