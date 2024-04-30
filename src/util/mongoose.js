module.exports = {
    mutlipleMongooseToObject: (mongooses) => {
        return mongooses.map(mongoose => mongoose.toObject());
    },

    mongooseObject: (mongooses) => {
        return mongooses ?  mongooses.toObject() : mongooses;
    }
};

