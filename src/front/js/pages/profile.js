import React, { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserProfileCard from "../component/UserProfileCard";

import { Context } from "../store/appContext";

const user = {
	name: 'John Doe',
	email: 'johndoe@example.com',
	location: 'Los Angeles, CA',
	image: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png'
  };

export const Profile = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<UserProfileCard user={user} />
		</div>
	);
};

