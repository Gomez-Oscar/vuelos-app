import { useState } from 'react';

const useFilter = (initalValue = {}) => {
  const [filters, setFilters] = useState(initalValue);
  const [filterResult, setFilterResult] = useState([]);
  const [responseFilter, setResponseFilter] = useState('');

  const handleFilter = (event, flights) => {
    const { name, value } = event.target;
    const filterParams = {
      ...filters,
      [name]: value,
    };

    let filtered = [...flights];
    for (const key in filterParams) {
      if (filterParams[key]) {
        const filteredResult = filtered.filter(
          element => element[key] == filterParams[key]
        );
        filtered = [...filteredResult];
      }
    }

    setFilters(filterParams);
    setFilterResult(filtered);
    setResponseFilter(() => (filtered.length ? '' : 'No results were found'));
  };

  return { filters, filterResult, responseFilter, setFilters, handleFilter };
};

export default useFilter;
