"use strict";

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

require("dotenv/config");

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

if (process.env.NODE_ENV === 'development') {
  app.use((0, _morgan.default)('dev'));
}

app.use((0, _cors.default)());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json());
app.use('/api', _routes.default);
app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`server started on ${process.env.APP_HOST}:${process.env.APP_PORT}!`);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwidXNlIiwiYm9keVBhcnNlciIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImpzb24iLCJyb3V0ZXMiLCJsaXN0ZW4iLCJBUFBfUE9SVCIsIkFQUF9IT1NUIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUVBLE1BQU1BLEdBQUcsR0FBRyx1QkFBWjs7QUFFQSxJQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixhQUE3QixFQUE0QztBQUMxQ0gsRUFBQUEsR0FBRyxDQUFDSSxHQUFKLENBQVEscUJBQU8sS0FBUCxDQUFSO0FBQ0Q7O0FBRURKLEdBQUcsQ0FBQ0ksR0FBSixDQUFRLG9CQUFSO0FBQ0FKLEdBQUcsQ0FBQ0ksR0FBSixDQUFRQyxvQkFBV0MsVUFBWCxDQUFzQjtBQUFFQyxFQUFBQSxRQUFRLEVBQUU7QUFBWixDQUF0QixDQUFSO0FBQ0FQLEdBQUcsQ0FBQ0ksR0FBSixDQUFRQyxvQkFBV0csSUFBWCxFQUFSO0FBRUFSLEdBQUcsQ0FBQ0ksR0FBSixDQUFRLE1BQVIsRUFBZ0JLLGVBQWhCO0FBRUFULEdBQUcsQ0FBQ1UsTUFBSixDQUFXVCxPQUFPLENBQUNDLEdBQVIsQ0FBWVMsUUFBdkIsRUFBaUNWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxRQUE3QyxFQUF1RCxNQUFNO0FBQzNEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FDRyxxQkFBb0JiLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxRQUFTLElBQUdYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUyxRQUFTLEdBRHBFO0FBR0QsQ0FKRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycydcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbidcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcblxuaW1wb3J0IHJvdXRlcyBmcm9tICdAL3JvdXRlcydcblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBhcHAudXNlKG1vcmdhbignZGV2JykpXG59XG5cbmFwcC51c2UoY29ycygpKVxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSlcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpXG5cbmFwcC51c2UoJy9hcGknLCByb3V0ZXMpXG5cbmFwcC5saXN0ZW4ocHJvY2Vzcy5lbnYuQVBQX1BPUlQsIHByb2Nlc3MuZW52LkFQUF9IT1NULCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFxuICAgIGBzZXJ2ZXIgc3RhcnRlZCBvbiAke3Byb2Nlc3MuZW52LkFQUF9IT1NUfToke3Byb2Nlc3MuZW52LkFQUF9QT1JUfSFgXG4gIClcbn0pXG4iXX0=