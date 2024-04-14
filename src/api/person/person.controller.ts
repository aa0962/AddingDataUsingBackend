import { Request, Response } from "express";
import { create_user, delete_user, get_user, get_users, update_user } from "./person.service";

export const handle_create_user = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        await create_user(data);
        res.status(201).send({
            success: true,
            message: 'User created'
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        });
    }
};

export const handle_get_user = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const user = await get_user(id);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const handle_get_users = async (req: Request, res: Response) => {
    try {
        const users = await get_users();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const handle_update_user = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await update_user(id, data);
        res.status(200).send('User updated');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const handle_delete_user = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await delete_user(id);
        res.status(200).send('User deleted');
    } catch (error) {
        res.status(500).send(error.message);
    }
};