import React, { Component } from 'react';
import TeamMember from './TeamMember';
import memberInfo from './memberInfo';
class Team extends Component {
	constructor() {
		super();
		this.state = { memberinfo: memberInfo };
	}

	mapping(x) {
		const members = x.map((member) => (
			<TeamMember
				key={member.id}
				img={member.img}
				name={member.name}
				
			/>
		));
		return members;
	}

	render() {
		return <div className="row">{this.mapping(this.state.memberinfo)}</div>;
	}

	
}

export default Team;

