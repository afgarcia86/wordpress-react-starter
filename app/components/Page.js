import React from 'react'
import autobind from 'autobind-decorator'

@autobind
class Page extends React.Component{

	static defaultProps = {
		title: 'Page',
		theTitle : '',
		theContent : ''
	}

  componentDidMount(){
  	this.getPostData()
  }

  componentDidUpdate(){
  	this.getPostData()
  }

  getPostData(){
  	this.props.getPostData('/wp-json/wp/v2/pages?filter[name]='+this.props.params.slug)
  }

  render() {
    return (
      <div>
       	<h1>{this.props.theTitle}</h1>
       	<div dangerouslySetInnerHTML={{__html: this.props.theContent }} />      	
      </div>
    )
  }
}

export default Page