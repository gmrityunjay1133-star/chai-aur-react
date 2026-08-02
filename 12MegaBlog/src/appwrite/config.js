import conf from "../conf/conf.js";
import {Client, ID ,Databases,Storage , Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    storage;

    constructor(){
         this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userID}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID
                }
            );
        } catch (error) {
            console.log("Appwrite service :: createPost :: error" , error);
            
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error" , error);
            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
            );
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error" , error);
            
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            );
        } catch (error) {
            console.log("Appwrite service :: getPost :: error" , error);
            
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries
            );
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error" , error);
            return false;
        }
    }

    //file upload services

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error" , error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketID,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error" , error);
            return false;
        }

    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appwriteBucketID,
            fileId
        );
    }


}


const service = new Service();

export default service

