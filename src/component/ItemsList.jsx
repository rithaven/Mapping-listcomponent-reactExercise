function ItemList({ items }) {
    return (
      <div>
        {items.map(item => <div key={item} className="gap-4 p-4 font-semibold text-white bg-blue-900 border border-yellow-100">{item}</div>)}
      </div>
    );
  }
  
  export default ItemList;