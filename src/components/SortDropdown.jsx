import { SORT_OPTIONS } from '../utils';

const SortDropdown = ({ handleSort }) => {
  return (
    <div className='sort-dropdown'>
      <select onChange={(e) => handleSort(e.target.value)} defaultValue=''>
        <option value='' disabled>
          Sort By
        </option>
        {SORT_OPTIONS.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortDropdown;
