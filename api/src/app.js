/**
 * Arquivo: src/app.js
 * Descricao: Responsavel por toda a confiugração do backend
 * Data: 28/03/2020
 */

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();