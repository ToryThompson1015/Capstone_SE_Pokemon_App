package com.pokemon.Pokemon_Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pokemon.Pokemon_Backend.model.User;



@Repository
public interface UserRepository  extends JpaRepository<User, Long>{

	
	
}
