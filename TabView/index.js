import React from 'react';

//import css
import './index.css';

class Tabview extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    generatePages() {
        console.log(this.props.children)
    }

    render() {
        return (
            <div className={'tabview'}>
                <div className={'tabview-nav'}>
                    nav
                </div>
                <div className={'tabview-pages'}>
                    {this.generatePages.bind(this)}
                </div>
            </div>
        )
    }

}

class TabViewPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className={'tabview-page'}>
                {this.props.children}
            </div>
        )
    }

}

export {
    TabViewPage,
};
export default Tabview;