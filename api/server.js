/**
 * Arquivo: server.js
 * Descricao: Arquivo responsavel por toda a configuração da applicação backend
 * Data: 28/03/2019
 * Author: Glaucia Lemos
 */



 app.use(bodyParser.urlencoded({extend: true}));
 app.use(bodyParser.json());
 app.use(bodyParser.json({type: 'application/vnd.api+json'}));
 app.use(morgan('dev'));
 app.use(cors());

 const port = process.env.PORT || 8000;



 app.use('/api', router);

 app.listen(port);
 console.log('Applicação executando na porta: ', port);