import React,{ PropTypes } from 'react'

const Repo = (props) => {
  return (
      <div>
        <h2>{props.params.repoName}</h2>
      </div>
  	)
}

Repo.propTypes = {
	//isLoading: PropTypes.bool.isRequired,
}
		
export default Repo

