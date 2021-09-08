package com.devsuperior.dsvendas.service;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SaleService {

  @Autowired
  private SaleRepository repository;

  public List<SaleDTO> findAll(){
    List<Sale> result = repository.findAll();
    return result.stream().map(SaleDTO::new).collect(Collectors.toList());
  }
}
