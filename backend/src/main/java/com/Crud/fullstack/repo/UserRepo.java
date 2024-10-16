package com.Crud.fullstack.repo;

import com.Crud.fullstack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {


}
