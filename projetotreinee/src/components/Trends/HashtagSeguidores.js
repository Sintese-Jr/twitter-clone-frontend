import '../../styles/hashtagSeguidores.css'

export default function HashtagSeguidores(props) {
    return (
        <div className="HashSegui">
            <div className="Hashtag">
                #{props.hashtag}
            </div>
            <div className="Seguidores">
                {props.seguidores}
            </div>
        </div>
    );
}