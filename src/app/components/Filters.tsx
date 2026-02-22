export default function Filters({ filters, setFilters }: any) {
  return (
    <div style={{ marginBottom: 20 }}>
      <input
        placeholder="جستجو..."
        value={filters.search}
        onChange={(e) =>
          setFilters({ ...filters, search: e.target.value })
        }
      />

      <select
        onChange={(e) =>
          setFilters({ ...filters, ordering: e.target.value })
        }
      >
        <option value="">مرتب‌سازی</option>
        <option value="-rating">بیشترین امتیاز</option>
        <option value="-released">جدیدترین</option>
      </select>
    </div>
  );
}
