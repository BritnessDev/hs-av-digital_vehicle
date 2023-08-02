import { getMessage } from "../helpers/lang";

export default {
    base: {
        children: ["contact", "document"],
        id: "base",
    },

    contact: {
        icon: "folder",
        id: "contact",
        title: getMessage("contact"),
        children: ["addressbook", "contactmanagement"],
    },

    document: {
        icon: "folder",
        id: "document",
        title: getMessage("Documents"),
        children: ["documentlist", "datacollection"],
    },

    addressbook: {
        icon: "user",
        id: "contact-list",
        title: getMessage("Address Book"),
        url: "/addresses",
    },

    contactmanagement: {
        icon: "file-text",
        id: "contact_management",
        title: getMessage("Contact Management"),
        url: "/address-management?type=add"
    },

    documentlist: {
        icon: "file-text",
        id: "documents",
        title: getMessage("Document List"),
        url: "/dossiers",
    },
    
    datacollection: {
        icon: "file-text",
        id: "datacollection",
        title: getMessage("Data Collection"),
        url: "/add-dossiers",
    },



};
