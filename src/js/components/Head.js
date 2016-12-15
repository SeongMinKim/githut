import React from 'react'
import Helmet from "react-helmet";


export default function Application() {
    return (
        <div className="application">
            <Helmet
                title="Github Language Stats"
                meta={[ {"charset": "utf-8"} ]}
                link={[
                {"rel": "stylesheet", "type": "text/css", "href": "//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"},
                 {"rel": "stylesheet", "type": "text/css", "href": "//allenfang.github.io/react-bootstrap-table/css/react-bootstrap-table-all.min.css"},
                 {"rel": "stylesheet", "type": "text/css", "href": "//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"},
                 {"rel": "stylesheet", "type": "text/css", "href": "//fonts.googleapis.com/css?family=Open+Sans:400,300,700"}
             ]}
             />
        </div>
    );
};
