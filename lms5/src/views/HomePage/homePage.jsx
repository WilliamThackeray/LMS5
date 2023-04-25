export default function HomePage() {
  return (
  <div className="container-fluid main bg-gray">
    <div className="row d-flex">
      {
        /* Aside Content */
      }
      <div className="aside col-sm-3 col-xs-12 p-4 m-2 bg-yellow rounded">
        <div className="homeContent">
          <h3 className="latestNews">Latest News</h3>
          <ul className="news">
            <li className="p-1">
              <strong>Jan 24, 2023:</strong> <em>Sausage Links</em> Decides on
              a team name.
            </li>
            <li className="p-1">
              <strong>Jan 24, 2023:</strong> <em>Ten Little Piggies</em>{" "}
              drafts Noah Thackeray as their team player. One of the more
              experienced players in the league. A great first round pick.
            </li>
            <li className="p-1">
              <strong>Jan 24, 2023:</strong> <em>Ten Little Piggies</em>{" "}
              Decides on a team name.
            </li>
            <li className="p-1">
              <strong className="text-red">Jan 22, 2023:</strong> Biñho League
              officially created. Team captains are currently being selected
              and a draft will begin within a week.
            </li>
          </ul>
        </div>
      </div>
      {
        /* Main Content */
      }
      <div className="col-sm-8 col-xs-12 m-2 p-3 bg-lightgray rounded">
        <div className="homeContent">
          <h1 className="p-0">Home</h1>
          <div>
            <p className="p-0 m-2">
              Biñho is the new way to play soccer. Less injuries, more fun.
            </p>
            <p className="p-0 m-2">
              The Biñho League is a league of brothers competing to be the
              best finger soccer player of all time. Games are sporatic, but
              intense.
            </p>
            <p className="p-0 m-2">
              Visit the <a href='/teams' className="teamsBtn">Teams</a> page to see what
              team you want to root for and for details about players and
              records.
            </p>
          </div>
          <div className="m-2">
            <h2>Introduction to Biñho</h2>
            {
              /* TODO: fix the height on the youtube video iFrame */
            }
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/lyeGISXjdvA" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="" />
          </div>
          <div>
            <h2>Tournament Standards</h2>
            <ul>
              <li className="p-1">
                Players must show up to their match 15 minutes before.
              </li>
              <li className="p-1">
                Standard{" "}
                <a href="https://binhoboard.com/pages/rules" target="_blank" rel="noreferrer">
                  Biñho rules
                </a>{" "}
                apply.
              </li>
              <li className="p-1">
                Fans must abide to the offical{" "}
                <a href="https://www.mlssoccer.com/about/fan-code-of-conduct" target="_blank" rel="noreferrer">
                  MLS Code of Conduct
                </a>
              </li>
              <li className="p-1">
                After each game, the players must shake hands
              </li>
            </ul>
            <p>
              If you're interested in aquiring a Biñho Board, check out the{" "}
              <a href="https://binhoboard.com/collections/boards" target="_blank" rel="noreferrer">
                shop
              </a>
              .
            </p>
            <div className="d-flex flex-row justify-content-between">
              {
                /* TODO: make the pictures clickable and link to the website */
              }
              <img src="https://cdn.shopify.com/s/files/1/0064/9904/1362/products/binhoclassicwhitegoalsweb_1024x1024@2x.jpg?v=1638412811" alt="Biñho Classic" className="img-thumbnail" width="33%" height="auto" />
              <img src="https://cdn.shopify.com/s/files/1/0064/9904/1362/products/greenturf.webjpg_1080x.jpg?v=1645475607" alt="Biñho Classic: Green Turf" className="img-thumbnail" width="33%" height="auto" />
              <img src="https://cdn.shopify.com/s/files/1/0064/9904/1362/products/arsenalmain2FINALFINAL_1080x.jpg?v=1667505729" alt="Biñho Liverpool Edition" className="img-thumbnail" width="33%" height="auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
}