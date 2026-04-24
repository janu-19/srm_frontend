const ResponseDisplay = ({ response }) => {
  if (!response) return null;

  const renderTree = (tree, indent = 0) => {
    if (!tree || typeof tree !== 'object') return <div>No tree data</div>;
    return Object.entries(tree).map(([key, value]) => (
      <div key={key} style={{ marginLeft: `${indent * 20}px` }}>
        <strong>{key}</strong>
        {Object.keys(value).length > 0 && renderTree(value, indent + 1)}
      </div>
    ));
  };

  return (
    <div className="response-display">
      <div className="card">
        <h3>User Info</h3>
        <p><strong>User ID:</strong> {response.user_id}</p>
        <p><strong>Email:</strong> {response.email_id}</p>
        <p><strong>Roll Number:</strong> {response.college_roll_number}</p>
      </div>

      <div className="card">
        <h3>Hierarchies</h3>
        {Array.isArray(response.hierarchies) && response.hierarchies.length > 0 ? response.hierarchies.map((h, i) => (
          <div key={i}>
            <p><strong>Root:</strong> {h.root} | <strong>Cycle:</strong> {h.has_cycle ? 'Yes' : 'No'}</p>
            {!h.has_cycle && <div className="tree">{renderTree(h.tree)}</div>}
          </div>
        )) : <p>No hierarchies data</p>}
      </div>

      <div className="card">
        <h3>Invalid Entries</h3>
        <ul>{Array.isArray(response.invalid_entries) ? response.invalid_entries.map((inv, i) => <li key={i}>{inv}</li>) : <li>No data</li>}</ul>
      </div>

      <div className="card">
        <h3>Duplicate Edges</h3>
        <ul>{Array.isArray(response.duplicate_edges) ? response.duplicate_edges.map((dup, i) => <li key={i}>{dup}</li>) : <li>No data</li>}</ul>
      </div>

      <div className="card">
        <h3>Summary</h3>
        <p><strong>Total Trees:</strong> {response.summary.total_trees}</p>
        <p><strong>Total Cycles:</strong> {response.summary.total_cycles}</p>
        <p><strong>Largest Tree Root:</strong> {response.summary.largest_tree_root || 'None'}</p>
      </div>
    </div>
  );
};

export default ResponseDisplay;