import { Row, Col } from "reactstrap"

const Adjectives = () => {
    const adjectives = [
        {
            id:0,
            adjective:  "attentive"
        },
        {
            id:1,
            adjective:  "capable"
        }, {
            id:2,
            adjective:  "careful"
        }, {
            id:3,
            adjective:  "cheerful"
        }, {
            id:4,
            adjective:  "confident"
        }, {
            id:5,
            adjective:  "cooperative"
        }, {
            id:6,
            adjective:  "courteous"
        },
        {
            id:7,
            adjective:  "creative"
        }, {
            id:8,
            adjective:  "dynamic"
        }, {
            id:9,
            adjective:  "eager"
        }, {
            id:10,
            adjective:  "energetic"
        }, {
            id:11,
            adjective:  "generous"
        }, {
            id:12,
            adjective:  "hard-working"
        },
        {
            id:13,
            adjective:  "helpful"
        }, {
            id:14,
            adjective:  "honest"
        }, {
            id:15,
            adjective:  "imaginative"
        }, {
            id:16,
            adjective:  "independent"
        }, {
            id:17,
            adjective:  "industrious"
        }, {
            id:18,
            adjective:  "motivated"
        },
        {
            id:19,
            adjective:  "organized"
        }, {
            id:20,
            adjective:  "outgoing"
        }, {
            id:21,
            adjective:  "pleasant"
        }, {
            id:22,
            adjective:  "polite"
        }, {
            id:23,
            adjective:  "resourceful"
        }, {
            id:24,
            adjective:  "unique"
        },
    ]
    const colOne = adjectives.filter((adj) => adj.id < 8);
    const colTwo = adjectives.filter((adj) => adj.id >= 9 && adj.id < 17)
    const colThree = adjectives.filter((adj) => adj.id >= 18)
  return (
    <Row>
        <Col>
        {
        colOne.map((adj) =>
        
        <p key={adj.id}>
        {adj.adjective}
        </p>)
    } 
        </Col>
        <Col>
        {
        colTwo.map((adj) =>
        
        <p key={adj.id}>
        {adj.adjective}
        </p>)
    } 
        </Col>
        <Col>
        {
        colThree.map((adj) =>
        
        <p key={adj.id}>
        {adj.adjective}
        </p>)
    } 
        </Col>       
     </Row>)
  
}

export default Adjectives