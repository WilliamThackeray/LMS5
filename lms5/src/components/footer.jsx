export default function Footer(props) {
  return (<footer className="container-fluid">
    <div className="row">
      <div className="col-sm-12 col-xs-12 bg-gray text-white text-center">
        <p className="p-3">Copyright by William Thackeray { props.year }</p>
      </div>
    </div>
  </footer>);
}