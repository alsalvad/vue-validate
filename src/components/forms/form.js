import mitt from "mitt";
export const emitter = mitt();

export const validate = (fields) => {
  Object.entries(fields).forEach(([key, value]) => {
    if (!value) {
      emitter.emit("doValidate", key);
    }
  });
  return Object.values(fields).every(Boolean);
};

export const completed = (id) => {
  emitter.emit('btCompleted', id);
};

export const doValidate = (fields) => {
  for(let field in fields){
    if(!fields[field]){
      emitter.emit("doValidate", field);
    }
  }
}


export default {};
