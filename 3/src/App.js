import React, {Component} from "react";
import {data} from "./data";

class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        };
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }

    toggleCollapse() {
        this.setState(prevState => ({
            collapsed: !prevState.collapsed
        }));
    }

    render() {
        const {name, children} = this.props;
        const {collapsed} = this.state;

        return (
            <div>
                <div onClick={this.toggleCollapse}>
                    {collapsed ? '+' : '-'} {name}
                </div>
                {!collapsed && (
                    <div style={{marginLeft: '20px'}}>
                        {children.map(child =>
                            child.type === 'FOLDER' ? (
                                <Folder key={child.name} name={child.name} children={child.children}/>
                            ) : (
                                <File key={child.name} name={child.name} mime={child.mime}/>
                            )
                        )}
                    </div>
                )}
            </div>
        );
    }
}

class File extends Component {
    render() {
        const {name, mime} = this.props;
        return (
            <div>
                <span>{name}</span> - <span>{mime}</span>
            </div>
        );
    }
}

class FileSystem extends Component {
    render() {
        const {data} = this.props;
        return (
            <div>
                {data.map(item =>
                    item.type === 'FOLDER' ? (
                        <Folder key={item.name} name={item.name} children={item.children}/>
                    ) : (
                        <File key={item.name} name={item.name} mime={item.mime}/>
                    )
                )}
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <FileSystem data={data}/>
        </div>
    );
}

export default App;