#include<stdio.h>
#include<stdlib.h>

struct Node{
    int data;
    struct Node* next;
};

// creating newNode
struct Node* createNode(int data){
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode -> data = data;
    newNode -> next = NULL;
    return newNode;
}

// inserting new node on front of list  
void insertatFront(struct Node** head,int data){
    struct Node* newNode = createNode(data);
    newNode->next = *head;
    //printf("%d \n",*head);
    //printf("%d \n",*newNode);
    *head = newNode;
}

// inserting new node on last of list
void insertatLast(struct Node** head, int data) {
    struct Node* newNode = createNode(data);
    struct Node* temp = *head;
    while(temp->next != NULL){
        temp = temp->next;
    }
    temp->next = newNode;
}

// deleting front node from like
void delete_Front_node(struct Node** head){
    struct Node* temp = *head;
    *head = temp->next; 
    free(temp);
}

void delete_End_node(struct Node** head) {
   if (*head == NULL) return;
    struct Node* temp = *head;
   
    // If the list has only one node
    if (temp->next == NULL) {
        free(temp);
        *head = NULL;
        return;
    }

    // Traverse to the second last node
    while (temp->next->next != NULL) {
        temp = temp->next;
    }

    // Delete the last node and update the link
    free(temp->next);
    temp->next = NULL;
}

// printing list 
void printList(struct Node* ptr){
    while(ptr != NULL){
        printf("%d ",ptr->data);
        ptr = ptr->next;
    }   
    printf("\n");  
}

int main(){
    
    struct Node* head = NULL;

    insertatFront(&head, 10);
    //insertatFront(&head, 20);
    //insertatFront(&head, 30);
    
    printList(head);
}

