const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    serverId: { type: String, required: true },
    balance: { type: Number, default: 10, min: 0 },
    dailyLastUsed: { type: Number, default: 0 },
    buds: { type: Number, default: 0 },
    inventory: [{
        id: String,
        name: String,
        acquiredAt: Date
    }],
    lastDaily: Date,
    activeRoles: [{
        roleId: String,
        expiresAt: Date
    }]
}, { timestamps: true });

profileSchema.index({ userId: 1, serverId: 1 }, { unique: true });

module.exports = mongoose.model("LittleKevin", profileSchema);