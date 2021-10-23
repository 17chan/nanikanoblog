export default function FilterButton(props) {
    return (
        <button
            type="button"
            className="btn toggle-btn"
            aria-pressed={props.isPressed} //このボタンが押されてるのか判定してる
            onClick={() => props.setFilter(props.name)} 
            //クリックされたらprops.nameつまりその押されたボタンの名前(All Active Completedのいずれか)がsetfilterによってfilterにセットされる。
        >
            <span>{props.name}</span>
        </button>
    );
}