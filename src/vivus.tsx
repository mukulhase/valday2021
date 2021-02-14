import React, { PureComponent, useEffect } from 'react';
import PropTypes from 'prop-types';
import Vivus, { VivusOptions } from 'vivus';

interface ReactVivusProps {
    progress: number,
    options: VivusOptions,
    style: {}
}

export class ReactVivus extends React.Component<ReactVivusProps> {
    id = "main";
    vivus : Vivus | null = null;

    componentDidMount() {
        const { options } = this.props
        this.vivus = new Vivus(this.id, options).stop();
    }
  
    setProgress(progress: number) {
        if(this.vivus != null){
            this.vivus.setFrameProgress(progress);
        }
    }

    render() {
      const { progress, style } = this.props;
      this.setProgress(progress);
      return <div id={this.id} style={style}/>;
    }
  }

  export default ReactVivus;