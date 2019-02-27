export class Task{
    // public Status: boolean;
    public QuoteType: string;
    public Quote: Number;
    public Contact: string;
    public Task: string;
    public DueDate: string;
    public TaskType: string;
    constructor(QuoteType: string, ID: Number, contact: string, task: string, duedate: string,
        Quote: string, discription:string){
            // this.Status = Status;
            this.QuoteType = QuoteType;
            this.Quote = ID;
            this.Contact = contact;
            this.Task = task;
            this.DueDate = duedate;
            this.TaskType = discription;
    }
}