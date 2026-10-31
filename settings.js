
import 'dotenv/config';

const settings = {
/* ================= DATABASE ================= */

// Set ONE database URL here.
// Supports MongoDB, PostgreSQL and MySQL.
// Leave empty to use local JSON storage.
DATABASE_URL: process.env.DATABASE_URL || '',

/* ================= BOT IDENTITY ================= */

botName: process.env.BOT_NAME || 'MUNAISZNTECHS™',
botOwner: process.env.BOT_OWNER || 'MUNAISZNTECHS',
ownerNumber: process.env.OWNER_NUMBER || '',
author: process.env.AUTHOR || 'MUNAISZNTECHS™',
packname: process.env.PACKNAME || 'MUNAISZNTECHS™',
description: process.env.DESCRIPTION || 'MUNAISZNTECHS™ Multi-device WhatsApp Bot',

/* ================= SESSION ================= */

sessionId: process.env.SESSION_ID || '',
pairingNumber: process.env.PAIRING_NUMBER || '',
CDN: 'https://media.mrfrankofc.gleeze.com'

};

// Sync DATABASE_URL back to process.env
if (settings.DATABASE_URL && !process.env.DATABASE_URL) {
    process.env.DATABASE_URL = settings.DATABASE_URL;
}

export default settings;
