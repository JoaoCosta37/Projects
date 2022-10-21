Use FICHA_CADASTRAL

go

--table´s insert

set identity_insert T_ESTADO_CIVIL on

insert into T_ESTADO_CIVIL (ID_ESTADO_CIVIL, DC_ESTADO_CIVIL) values
(1,'SOLTEIRO'),
(2,'CASADO'),
(3,'SEPARADO'),
(4,'DIVORCIADO'),
(5,'VIÚVO');

set identity_insert T_ESTADO_CIVIL off

set identity_insert T_ST_EMPREGO on

insert into T_ST_EMPREGO (ID_ST_EMPREGO, DC_ST_EMPREGO) values

(1,'EMPREGADO'),
(2,'DESEMPREGADO'),
(3,'TRABALHO INFORMAL'),
(4,'AUTÔNOMO'),
(5,'APOSENTADO / PENSIONISTA');

set identity_insert T_ST_EMPREGO on


