const { model, Schema } = require("mongoose");

const profileSchema = new Schema({
    userId: { type: String, required: true },
    serverId: { type: String, required: true },
    balance: { type: Number, default: 10, min: 0 },
    dailyLastUsed: { type: Number, default: 0 },
    buds: { type: Number, default: 0 },
    inventory: [{
        id: String,
        name: String,
        acquiredAt: { type: Date, default: Date.now }
    }],
    lastDaily: { type: Date },
    activeRoles: [{
        roleId: String,
        expiresAt: Date
    }],
    timeCapsules: [{
        message: { type: String, required: true },
        openAt: { type: Date, required: true },
        isPublic: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now }
    }]
}, { timestamps: true });

profileSchema.index({ userId: 1, serverId: 1 }, { unique: true });

module.exports = model("LittleKevin", profileSchema);
