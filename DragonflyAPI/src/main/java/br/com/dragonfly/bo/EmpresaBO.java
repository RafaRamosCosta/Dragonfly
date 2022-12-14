package br.com.dragonfly.bo;

import java.util.ArrayList;

import br.com.dragonfly.dao.EmpresaDAO;
import br.com.dragonfly.to.EmpresaTO;

public class EmpresaBO {
	private EmpresaDAO eDAO;
	
	public String cadastraEmpresa(EmpresaTO empresa) {
		eDAO = new EmpresaDAO();
		return eDAO.inserir(empresa);
	}
	
	public String alteraEmpresa(EmpresaTO empresa) {
		eDAO = new EmpresaDAO();
		return eDAO.alterar(empresa);
	}
	
	public String excluiEmpresa(int id) {
		eDAO = new EmpresaDAO();
		EmpresaTO empresa = new EmpresaTO();
		empresa.setIdEmpresa(id);
		return eDAO.excluir(empresa);
	}
	
	public ArrayList<EmpresaTO> listaEmpresas() {
		ArrayList<EmpresaTO> empresas;
		eDAO = new EmpresaDAO();
		empresas = eDAO.listaEmpresas();
		return empresas;
	}
	
	public EmpresaTO listaEmpresa(int id) {
		eDAO = new EmpresaDAO();
		return eDAO.listaEmpresa(id);
	}
	
	public EmpresaTO login(EmpresaTO emp) {
		eDAO = new EmpresaDAO();
		return eDAO.login(emp);
	}
}
