import React, { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserProfileCard from "../component/UserProfileCard";
import profileInfoForm from "../component/profileInfoForm";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Context } from "../store/appContext";

const user = {
	name: 'Jose Carrasco',
	image: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png'
  };

const info = {
	email: 'Data 1',
	signdate: 'Data 2',
	phonenumber: 'Data 3',
	bio: 'Data 4',
};


export const Profile = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<Row>
				<Col>
				<UserProfileCard user={user}></UserProfileCard>
				</Col>
				<Col>
				<profileInfoForm info={info}></profileInfoForm>
				</Col>
			</Row>
		</Container>
	);
};

