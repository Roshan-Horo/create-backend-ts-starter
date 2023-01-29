// create user Schema

export const createUserSchema = {
  "type": "object",
  "properties": {
    "name": {
      "type": "object",
      "properties": {
        "first": {"type": "string", "minLength": 1},
        "middle": {"type": "string"},
        "last": {"type": "string", "minLength": 1}
      },
      "required": ["first", "last"]
    },
    "mobile": {"type": "string", "minLength": 10, "maxLength": 10 , "pattern": "^[789]{1}[0-9]{9}$"},
    "email": {"type": "string", "pattern": "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"},
    "isAdmin": {"type": "boolean"},
    "passcode": {"type": "string", "minLength": 6, "maxLength": 6 }

  },
  "required": ["name", "mobile", "email", "passcode"]
}