const YourStack = ({ stack, removeStack, removeAll }) => {
  return (
    <aside className="your-stack">
      <h2>Your Stack</h2>

      <p className="selected-count">{stack.length} Technology Selected</p>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <p>Your stack is empty.</p>
        </div>
      ) : (
        <>
          {stack.map((item) => (
            <div className="stack-item" key={item.id}>
              <img src={item.icon} alt={item.name} />

              <div>
                <h4>{item.name}</h4>

                <small>{item.category}</small>
              </div>

              <button onClick={() => removeStack(item.id)}>✕</button>
            </div>
          ))}

          <button className="remove-all-btn" onClick={removeAll}>
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;
