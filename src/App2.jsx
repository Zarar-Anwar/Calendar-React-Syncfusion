import * as React from 'react';
import { useEffect, useRef } from 'react';
import { ScheduleComponent, ResourcesDirective, ResourceDirective, ViewsDirective, ViewDirective, Inject, TimelineViews, Resize, DragAndDrop, TimelineMonth } from '@syncfusion/ej2-react-schedule';
import './index.css';
import { extend, closest, remove, addClass } from '@syncfusion/ej2-base';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
/**
 * schedule resources group-editing sample
 */
const App2 = () => {
    let scheduleObj = useRef(null);
    let treeObj = useRef(null);
    let isTreeItemDropped = false;
    let draggedItemId = '';
    const allowDragAndDrops = true;
    const fields = { dataSource: {}, id: 'Id', text: 'Name' };
    const departmentData = [
        { Text: 'GENERAL', Id: 1, Color: '#bbdc00' },
        { Text: 'DENTAL', Id: 2, Color: '#9e5fff' }
    ];
    const consultantData = [
        { Text: 'Alice', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Cardiologist' },
        { Text: 'Nancy', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Orthodontist' },
        { Text: 'Robert', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Optometrist' },
        { Text: 'Robson', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Periodontist' },
        { Text: 'Laura', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Orthopedic' },
        { Text: 'Margaret', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Endodontist' }
    ];
    const getConsultantName = (value) => {
        return value.resourceData[value.resource.textField];
    };
    const getConsultantImage = (value) => {
        return getConsultantName(value).toLowerCase();
    };
    const getConsultantDesignation = (value) => {
        return value.resourceData.Designation;
    };
    const resourceHeaderTemplate = (props) => {
        return (<div className="template-wrap">
        <div className="specialist-category">
          <div className={"specialist-image " + getConsultantImage(props)}></div>
          <div className="specialist-name"> {getConsultantName(props)}</div>
          <div className="specialist-designation">{getConsultantDesignation(props)}</div>
        </div>
      </div>);
    };
    const treeTemplate = (props) => {
        return (<div id="waiting">
        <div id="waitdetails">
          <div id="waitlist">{props.Name}</div>
          <div id="waitcategory">{props.DepartmentName} - {props.Description}</div>
        </div>
      </div>);
    };
    const onItemSelecting = (args) => {
        args.cancel = true;
    };
    const onTreeDrag = (event) => {
        if (scheduleObj.current.isAdaptive) {
            let classElement = scheduleObj.current.element.querySelector('.e-device-hover');
            if (classElement) {
                classElement.classList.remove('e-device-hover');
            }
            if (event.target.classList.contains('e-work-cells')) {
                addClass([event.target], 'e-device-hover');
            }
        }
    };
    const onActionBegin = (event) => {
        if (event.requestType === 'eventCreate' && isTreeItemDropped) {
            let treeViewData = treeObj.current.fields.dataSource;
            const filteredPeople = treeViewData.filter((item) => item.Id !== parseInt(draggedItemId, 10));
            treeObj.current.fields.dataSource = filteredPeople;
            let elements = document.querySelectorAll('.e-drag-item.treeview-external-drag');
            for (let i = 0; i < elements.length; i++) {
                remove(elements[i]);
            }
        }
    };
    const onTreeDragStop = (event) => {
        let treeElement = closest(event.target, '.e-treeview');
        let classElement = scheduleObj.current.element.querySelector('.e-device-hover');
        if (classElement) {
            classElement.classList.remove('e-device-hover');
        }
        if (!treeElement) {
            event.cancel = true;
            let scheduleElement = closest(event.target, '.e-content-wrap');
            if (scheduleElement) {
                let treeviewData = treeObj.current.fields.dataSource;
                if (event.target.classList.contains('e-work-cells')) {
                    const filteredData = treeviewData.filter((item) => item.Id === parseInt(event.draggedNodeData.id, 10));
                    let cellData = scheduleObj.current.getCellDetails(event.target);
                    let resourceDetails = scheduleObj.current.getResourcesByIndex(cellData.groupIndex);
                    let eventData = {
                        Name: filteredData[0].Name,
                        StartTime: cellData.startTime,
                        EndTime: cellData.endTime,
                        IsAllDay: cellData.isAllDay,
                        Description: filteredData[0].Description,
                        DepartmentID: resourceDetails.resourceData.GroupId,
                        ConsultantID: resourceDetails.resourceData.Id
                    };
                    scheduleObj.current.openEditor(eventData, 'Add', true);
                    isTreeItemDropped = true;
                    draggedItemId = event.draggedNodeData.id;
                }
            }
        }
        document.body.classList.remove('e-disble-not-allowed');
    };
    const onTreeDragStart = () => {
        document.body.classList.add('e-disble-not-allowed');
    };
    return (<div className='schedule-control-section'>
      <div className='col-lg-12 control-section'>
        <div className='control-wrapper drag-sample-wrapper'>
          <div className="schedule-container">
            <div className="title-container">
              <h1 className="title-text">Doctor's Appointments</h1>
            </div>
            <ScheduleComponent ref={scheduleObj} cssClass='schedule-drag-drop' width='100%' height='650px' selectedDate={new Date(2021, 7, 2)} currentView='TimelineDay' resourceHeaderTemplate={resourceHeaderTemplate}  group={{ enableCompactView: false, resources: ['Departments', 'Consultants'] }} actionBegin={onActionBegin}>
              <ResourcesDirective>
                <ResourceDirective field='DepartmentID' title='Department' name='Departments' allowMultiple={false} dataSource={departmentData} textField='Text' idField='Id' colorField='Color'/>
                <ResourceDirective field='ConsultantID' title='Consultant' name='Consultants' allowMultiple={false} dataSource={consultantData} textField='Text' idField='Id' groupIDField="GroupId" colorField='Color'/>
              </ResourcesDirective>
              <ViewsDirective>
                <ViewDirective option='TimelineDay'/>
                <ViewDirective option='TimelineMonth'/>
              </ViewsDirective>
              <Inject services={[TimelineViews, TimelineMonth, Resize, DragAndDrop]}/>
            </ScheduleComponent>
          </div>
          <div className="treeview-container">
            <div className="title-container">
              <h1 className="title-text">Waiting List</h1>
            </div>
            <TreeViewComponent ref={treeObj} cssClass='treeview-external-drag' dragArea=".drag-sample-wrapper" nodeTemplate={treeTemplate} fields={fields} nodeDragStop={onTreeDragStop} nodeSelecting={onItemSelecting} nodeDragging={onTreeDrag} nodeDragStart={onTreeDragStart} allowDragAndDrop={allowDragAndDrops}/>
          </div>
        </div>
      </div>
    </div>);
};
export default App2;