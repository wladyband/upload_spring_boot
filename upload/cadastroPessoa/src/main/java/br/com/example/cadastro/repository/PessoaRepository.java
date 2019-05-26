package br.com.example.cadastro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.example.cadastro.model.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

}
