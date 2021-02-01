import { Request, Response, request, response, NextFunction } from 'express';
import knex from '../database/connection';
import { check, validationResult } from 'express-validator';

class UsersController {


    async create(request: Request, response: Response, next: NextFunction) {

        check('email', 'invalid email').isEmail();
        check('username', 'invalid username').isLength({min:4});
        
        const errors = validationResult(request);
        
        if(!errors.isEmpty){
            return response.render('users', {validacao: errors.array()});
        }

        const {
            name,
            email,
            username
        } = request.body;

        const trx = await knex.transaction();

        try {
            const user = {
                name,
                email,
                username
            }

            const insertedIds = await trx('users').insert(user);

            const user_id = insertedIds[0];

            await trx.commit();

            return response.json({
                id: user_id,
                ...user,
            });

        } catch (error) {
             await trx.rollback();
     
            next(error);
        }
        
 }

 async index(request: Request, response: Response, next: NextFunction) {
     try{
        const { id } = request.params;

        const user = await knex('users').where('id', id).first();

        if(!user){
            return response.status(400).json({ message: 'User not found.' });
        }

        return response.json({ user });

     }catch(error){
        return response.status(400).json({
                error
            })
     }
}

async show(request: Request, response: Response, next: NextFunction) {
    try{
        const data = await knex('users');

        return response.json({ data });

    }catch(error){
        return response.status(400).json({
                error
            })
    }
}

async update(request: Request, response: Response, next: NextFunction) {
    try{
        const { username } = request.body;
        const { id } = request.params;

        await knex('users')
        .update({ username })
        .where({id});

        return response.send();

    }catch(error){
        return response.status(400).json({
                error
            })
    }
}

async delete(request: Request, response: Response, next: NextFunction) {
    try{
        const { id } = request.params;

        await knex('users')
        .where({ id })
        .del();

        return response.send();

    }catch(error){
        return response.status(400).json({
                error
            })
    }
}

}

export default UsersController;