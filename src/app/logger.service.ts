export class LoggerService {

    logStatus(message: any) {

        console.log(new Date() + ' ' + JSON.stringify(message));
    }
}
