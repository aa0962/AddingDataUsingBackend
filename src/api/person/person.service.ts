import { v4 as uuidv4 } from 'uuid';
import database from "../../loaders/database";
import { Person } from "./person.model";

export const create_user = async (data: Person) => {
    const person_collection = await (await database()).collection('person');
    const person = await person_collection.findOne({ mobile: data.mobile });
    if (person) {
        throw ('User already exists');
    }
    await person_collection.insertOne({
        ...data,
        id: uuidv4()
    });
};

export const get_user = async (id: string) => {
    const person_collection = await (await database()).collection('person');
    const person = await person_collection.findOne({ id });
    if (!person) {
        throw new Error('User not found');
    }
    return await person_collection.findOne({ id });
};

export const get_users = async () => {
    const person_collection = await (await database()).collection('person');
    return await person_collection.find().toArray();
};

export const update_user = async (id: string, data: Person) => {
    const person_collection = await (await database()).collection('person');
    const person = await person_collection.findOne({ id });
    if (!person) {
        throw new Error('User not found');
    }
    await person_collection.updateOne({ id }, { $set: data });
};

export const delete_user = async (id: string) => {
    const person_collection = await (await database()).collection('person');
    const person = await person_collection.findOne({ id });
    if (!person) {
        throw new Error('User not found');
    }
    await person_collection.deleteOne({ id });
};