export function ScreenShot(){
    return <>
    <h3 className="slice-title">Red Cover</h3>
    <img src="https://dummyimage.com/300" />
    <div className="setting-data">
        <div className="price">30+</div>
        <div className="attr-color">Red</div>
    </div>
    </>
}


export function ProductRead({ shot_items }) {
    return (
      <ul className="tree-main">      
        {shot_items.children.map((child) => (
          <li key={child.key}>      
            <div>{child.data.name}</div>
            {shot_items.children && <ProductRead shot_items={child} /> }
          </li>
        ))}
      </ul>
    );
}
