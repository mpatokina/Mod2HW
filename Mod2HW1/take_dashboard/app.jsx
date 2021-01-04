class SideBar extends React.Component {
    render () {
        return (
            <div id="SideBar">
                    <h1>Dashboard</h1>
                    <h1>Widget</h1>
                    <h1>Reviews</h1>
                    <h1>Customers</h1>
                    <h1>Online Analysis</h1>
                    <h1>Settings</h1>
                </div>
        )
    }
}
class Reviews extends React.Component {
    render () {
        return (
            <div id="Reviews">
                <h1>Reviews</h1>
                <h2>1,281</h2>
            </div>
        )
    }
}

class Average_Rating extends React.Component {
    render () {
        return (
            <div id="Average_Rating">
                <h1>Average Rating</h1>
                <h2>4.6</h2>
            </div>
        )
    }
}

class Sentiment_Analysis extends React.Component {
    render () {
        return (
            <div id="Sentiment_Analysis">
                <h1>Sentiment Analysis</h1>
                <h3>960</h3>
                <h3>122</h3>
                <h3>321</h3>
            </div>
        )
    }
}

class Website_Visitors extends React.Component {
    render () {
        return (
            <div id="Wesite_Visitors">
                <h1>Website Visitors</h1>
                <h4>821</h4>
                <div id="Nested_Box"></div>
            </div>
        )
    }
}

ReactDOM.render(
    <div id="Container">
        <SideBar/>
        <Reviews/>
        <Average_Rating/>
        <Sentiment_Analysis/>
        <Website_Visitors/>
    </div>,


   // <h1>Commentce Dashboard Creation!</h1>,
   //
   
   
   document.querySelector('main')
)